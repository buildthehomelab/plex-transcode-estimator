// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Plex Transcode Estimator</h3>
            <p className="text-gray-400 text-sm">
              A simple web application to help you estimate how many simultaneous transcodes your Plex Media Server can handle based on your CPU's PassMark score.
            </p>
          </div>

          {/* Resources section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://support.plex.tv/articles/201774043-what-kind-of-cpu-do-i-need-for-my-server/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Plex CPU Requirements</a>
              </li>
              <li>
                <a href="https://www.cpubenchmark.net/cpu_list.php" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PassMark CPU Benchmarks</a>
              </li>
              <li>
                <a href="https://forums.plex.tv/c/plex-media-server/hardware/7" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Plex Hardware Forum</a>
              </li>
            </ul>
          </div>

          {/* Project section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Project</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/buildthehomelab/plex-transcode-estimator" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repository</a>
              </li>
              <li>
                <a href="https://github.com/buildthehomelab/plex-transcode-estimator/issues" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Report an Issue</a>
              </li>
              <li>
                <a href="https://github.com/buildthehomelab/plex-transcode-estimator/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">License</a>
              </li>
            </ul>
          </div>

          {/* Social/Connect section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/buildthehomelab" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Have suggestions? Contribute to make Plex Transcode Estimator better for everyone.
            </p>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Plex Transcode Estimator.
          </p>
          <p className="text-sm text-gray-400">
            <span>Apache License 2.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
