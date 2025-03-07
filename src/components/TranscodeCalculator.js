// src/components/TranscodeCalculator.js
import React, { useState, useEffect } from 'react';

const TranscodeCalculator = () => {
  const [passmark, setPassmark] = useState(20000);
  const [subtitleBurnIn, setSubtitleBurnIn] = useState(false);
  const [results, setResults] = useState({});
  
  const videoProfiles = [
    { 
      name: "4K HDR", 
      description: "50Mbps, 10-bit HEVC → 10Mbps 1080p", 
      passmark: 17000 
    },
    { 
      name: "4K SDR", 
      description: "40Mbps, 8-bit HEVC → 10Mbps 1080p", 
      passmark: 12000 
    },
    { 
      name: "1080p", 
      description: "10Mbps, H.264", 
      passmark: 2000 
    },
    { 
      name: "720p", 
      description: "4Mbps, H.264", 
      passmark: 1500 
    }
  ];
  
  useEffect(() => {
    calculateTranscodes();
  }, [passmark, subtitleBurnIn]);
  
  const calculateTranscodes = () => {
    const subtitleCost = subtitleBurnIn ? 1000 : 0;
    const newResults = {};
    
    videoProfiles.forEach(profile => {
      const totalPassmarkNeeded = profile.passmark + subtitleCost;
      const possibleTranscodes = Math.floor(passmark / totalPassmarkNeeded);
      newResults[profile.name] = {
        count: possibleTranscodes,
        perProfile: totalPassmarkNeeded
      };
    });
    
    setResults(newResults);
  };
  
  // Common styles using the dark theme
  const cardStyle = "dark-card p-6 mb-8";
  const headingStyle = "text-2xl font-bold text-white mb-4";
  const labelStyle = "block text-gray-300 font-medium mb-2";
  const inputStyle = "w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500";
  const resultCardStyle = "bg-gray-800 border border-gray-700 rounded-lg p-4 mb-4";
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Plex Transcode Estimator
        </h1>
        
        <div className={cardStyle}>
          <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg">
            <p className="text-red-200 text-sm">
              <strong>Important:</strong> These estimates are for CPU software transcoding only, when QuickSync or other hardware transcoding is not enabled.
            </p>
          </div>
          
          <div className="mb-4">
            <label className={labelStyle}>
              PassMark CPU Score
            </label>
            <input
              type="number"
              value={passmark}
              onChange={(e) => {
                const value = e.target.value;
                // Allow empty input (no default 0)
                setPassmark(value === '' ? '' : parseInt(value) || 0);
              }}
              className={inputStyle}
            />
          </div>
          
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={subtitleBurnIn}
                onChange={(e) => setSubtitleBurnIn(e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <span className="ml-2 text-gray-300">
                Include subtitle burn-in (+1000 PassMark per transcode)
              </span>
            </label>
          </div>
        </div>
        
        <div className={cardStyle}>
          <h2 className={headingStyle}>Plex Transcode Capacity</h2>
          
          <div className="mb-4 p-3 notification-box">
            <strong>Note:</strong> These estimates are per video category. Your Plex server cannot simultaneously handle the maximum number of transcodes across all categories. Choose the category that best represents your usage scenario.
          </div>
          
          {videoProfiles.map((profile) => (
            <div key={profile.name} className={resultCardStyle}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">{profile.name}</h3>
                  <p className="text-sm text-gray-400">{profile.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-400">
                    {results[profile.name]?.count || 0}
                  </div>
                  <div className="text-sm text-gray-400">
                    {results[profile.name]?.perProfile || profile.passmark} PassMark per transcode
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          {subtitleBurnIn && <p>Including subtitle burn-in costs (+1000 PassMark per transcode).</p>}
        </div>
      </div>
    </div>
  );
};

export default TranscodeCalculator;
