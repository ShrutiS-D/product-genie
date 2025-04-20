import React from 'react';
import { Mic, Search, FilterIcon } from 'lucide-react';

interface FeatureGridProps {
  isDarkMode: boolean;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ isDarkMode }) => {
  const features = [
    {
      icon: <Mic size={24} />,
      title: 'Voice Search',
      description: 'Simply speak to search for products',
    },
    {
      icon: <FilterIcon size={24} />,
      title: 'Smart Filter',
      description: 'Get intelligent product recommendations by filtering',
    },
    {
      icon: <Search size={24} />,
      title: 'Smart Suggestions',
      description: 'Get intelligent product recommendations',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {features.map((feature) => (
        <div
          key={feature.title}
          className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105`}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-500 text-white">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;