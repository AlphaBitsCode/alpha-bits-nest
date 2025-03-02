
import { useState } from 'react';
import { Package, BookOpen, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';

const Products = () => {
  useScrollAnimation();
  const [activeProduct, setActiveProduct] = useState<'mushroom' | 'farm'>('mushroom');
  
  // Mushroom-in-a-Box pre-order form state
  const [mushroomForm, setMushroomForm] = useState({
    name: '',
    email: '',
    quantity: 1,
    address: '',
    message: ''
  });
  
  // Farm In Box contact form state
  const [farmForm, setFarmForm] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    institutionType: '',
    message: ''
  });
  
  const handleMushroomFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMushroomForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFarmFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFarmForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleMushroomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Mushroom form submitted:', mushroomForm);
    alert('Thank you for your pre-order! We will contact you soon.');
    setMushroomForm({
      name: '',
      email: '',
      quantity: 1,
      address: '',
      message: ''
    });
  };
  
  const handleFarmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Farm form submitted:', farmForm);
    alert('Thank you for your interest! We will send more information shortly.');
    setFarmForm({
      institutionName: '',
      contactPerson: '',
      email: '',
      phone: '',
      institutionType: '',
      message: ''
    });
  };

  return (
    <section id="products" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scrolled-section">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Innovative Solutions for Modern Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our cutting-edge products designed to revolutionize agriculture and education, making technology accessible to everyone.
          </p>
        </div>
        
        {/* Product Tabs */}
        <div className="flex justify-center mb-10 scrolled-section">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeProduct === 'mushroom' 
                  ? 'bg-white shadow-md text-brand-navy font-medium' 
                  : 'text-gray-500 hover:text-brand-navy'
              }`}
              onClick={() => setActiveProduct('mushroom')}
            >
              <span className="flex items-center">
                <Package size={18} className="mr-2" />
                Mushroom-in-a-Box
              </span>
            </button>
            <button
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeProduct === 'farm' 
                  ? 'bg-white shadow-md text-brand-navy font-medium' 
                  : 'text-gray-500 hover:text-brand-navy'
              }`}
              onClick={() => setActiveProduct('farm')}
            >
              <span className="flex items-center">
                <BookOpen size={18} className="mr-2" />
                Farm In Box
              </span>
            </button>
          </div>
        </div>
        
        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center scrolled-section">
          {/* Mushroom-in-a-Box */}
          {activeProduct === 'mushroom' && (
            <>
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Mushroom-in-a-Box</h3>
                <p className="text-gray-600 mb-6">
                  A complete kit for growing gourmet mushrooms at home. Our innovative solution makes mushroom cultivation accessible to everyone, with easy-to-follow instructions and all necessary components included.
                </p>
                <ul className="space-y-3 mb-8">
                  {['All-in-one cultivation kit', 'Sustainable packaging', 'Easy-to-follow instructions', 'Premium mushroom strains', 'Multiple harvests possible'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight size={20} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-xl font-semibold mb-4">Pre-order Now</h4>
                <form onSubmit={handleMushroomSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={mushroomForm.name}
                        onChange={handleMushroomFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={mushroomForm.email}
                        onChange={handleMushroomFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={mushroomForm.quantity}
                      onChange={handleMushroomFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={mushroomForm.address}
                      onChange={handleMushroomFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={mushroomForm.message}
                      onChange={handleMushroomFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Pre-order Now
                  </button>
                </form>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg opacity-30 blur-lg animate-pulse"></div>
                  <div className="relative glassmorphism overflow-hidden rounded-lg p-1">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1608283234908-477a0c9b34c3?q=80&w=1000&auto=format&fit=crop" 
                        alt="Mushroom growing kit" 
                        className="w-full h-96 object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {/* Farm In Box */}
          {activeProduct === 'farm' && (
            <>
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Farm In Box - Educational Kit</h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive educational package designed for schools and learning institutions to teach sustainable farming practices, biology, and environmental science through hands-on experience.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Interactive learning materials', 'Sustainable farming techniques', 'STEM curriculum integration', 'Digital monitoring tools', 'Teacher support resources'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight size={20} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-xl font-semibold mb-4">Request Information</h4>
                <form onSubmit={handleFarmSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
                      <input
                        type="text"
                        id="institutionName"
                        name="institutionName"
                        value={farmForm.institutionName}
                        onChange={handleFarmFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        value={farmForm.contactPerson}
                        onChange={handleFarmFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={farmForm.email}
                        onChange={handleFarmFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={farmForm.phone}
                        onChange={handleFarmFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="institutionType" className="block text-sm font-medium text-gray-700 mb-1">Institution Type</label>
                    <select
                      id="institutionType"
                      name="institutionType"
                      value={farmForm.institutionType}
                      onChange={handleFarmFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    >
                      <option value="">Select Institution Type</option>
                      <option value="Primary School">Primary School</option>
                      <option value="Secondary School">Secondary School</option>
                      <option value="College">College</option>
                      <option value="University">University</option>
                      <option value="Research Institute">Research Institute</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={farmForm.message}
                      onChange={handleFarmFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Request Information
                  </button>
                </form>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg opacity-30 blur-lg animate-pulse"></div>
                  <div className="relative glassmorphism overflow-hidden rounded-lg p-1">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?q=80&w=1000&auto=format&fit=crop" 
                        alt="Farm in Box Educational Kit" 
                        className="w-full h-96 object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
