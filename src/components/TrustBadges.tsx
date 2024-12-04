import React from 'react';
import { Shield, Award, Clock, CreditCard } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '256-bit SSL encryption'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guaranteed'
    },
    {
      icon: Clock,
      title: 'Instant Delivery',
      description: 'Immediate access after purchase'
    },
    {
      icon: CreditCard,
      title: 'Secure Transaction',
      description: 'Protected by PayPal'
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50"
            >
              <badge.icon className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}