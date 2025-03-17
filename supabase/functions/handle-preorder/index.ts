
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PreorderData {
  name: string;
  email: string;
  quantity: number;
  address: string;
  country: string;
  product: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get request data
    const preorderData: PreorderData = await req.json();
    console.log("Received preorder request:", preorderData);

    // Validate required fields
    const requiredFields = ["name", "email", "quantity", "address", "country", "product"];
    for (const field of requiredFields) {
      if (!preorderData[field as keyof PreorderData]) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: `Missing required field: ${field}` 
          }),
          { 
            status: 400, 
            headers: { ...corsHeaders, "Content-Type": "application/json" } 
          }
        );
      }
    }

    // Process the preorder in Supabase
    const { data, error } = await supabase
      .from("preorders")
      .insert([preorderData])
      .select();

    if (error) {
      console.error("Error saving preorder:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    console.log("Preorder saved successfully:", data);

    // Send success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Preorder submitted successfully",
        data: data[0]
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Unexpected error in handle-preorder function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
