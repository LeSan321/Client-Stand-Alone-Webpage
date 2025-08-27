import React from 'react';
import { Heart, Calendar, Hash } from 'lucide-react';

// @component: FooterSection
export const FooterSection = () => {
  // @return
  return <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mt-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              <span>Creative Project Portfolio</span>
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-2xl">
            <span>This project materials hub was created to provide easy access to all project-related content. For questions or additional materials, please don't hesitate to reach out using the contact information above.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: August 27, 2025</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4" />
              <span>Project ID: PROJ-2024-001</span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-gray-500 mb-2">
            <span>Created for</span>
          </div>
          <div className="font-semibold text-gray-800 text-lg mb-1">
            <span>Future Vision</span>
          </div>
          <div className="text-sm text-gray-600 mb-1">
            <span>lesanr@protonmail.com</span>
          </div>
          <div className="text-sm text-gray-600">
            <span>www.comingsoon.indevelopment</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          <span>© 2025 All rights reserved. This content is confidential and intended solely for Future Vision.</span>
        </div>
        <div className="text-sm text-gray-400">
          <span>Powered by Professional Project Hub</span>
        </div>
      </div>
    </div>;
};