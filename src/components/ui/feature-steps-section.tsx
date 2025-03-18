
import { FeatureSteps } from '@/components/ui/feature-section';

interface Feature {
  step: string;
  title: string;
  content: string;
  image: string;
}

interface FeatureStepsSectionProps {
  features: Feature[];
}

export function FeatureStepsSection({ features }: FeatureStepsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <FeatureSteps 
        features={features}
        title="How We Help Businesses"
        autoPlayInterval={4000}
        imageHeight="h-[400px]"
      />
    </section>
  );
}
