import React from 'react';
import { Star, ThumbsUp, VerifiedIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  helpful: number;
}

export function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      author: "Sarah Johnson",
      rating: 5,
      date: "2024-02-15",
      content: "Excellent service! The software license was delivered instantly and works perfectly. Their customer support team was very helpful with the installation process.",
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      author: "Michael Chen",
      rating: 5,
      date: "2024-02-10",
      content: "Best prices I've found for genuine software licenses. The process was smooth and straightforward. Will definitely buy from them again.",
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      rating: 4,
      date: "2024-02-05",
      content: "Great experience overall. The software works as expected and the price was very competitive. Would recommend to others.",
      verified: true,
      helpful: 15
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
          <p className="text-lg text-gray-600">See what our customers have to say about their experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{review.author}</h3>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary-600">
                        <VerifiedIcon className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{review.content}</p>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ThumbsUp className="w-4 h-4" />
                <span>{review.helpful} people found this helpful</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">4.9 out of 5 based on 1,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}