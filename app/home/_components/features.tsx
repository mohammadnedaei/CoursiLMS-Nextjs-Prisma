import { Star, BookOpen, Monitor, Layers, Share, Shield } from "lucide-react";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-3xl font-bold mb-4">Why Choose Coursi?</h2>
            <p className="text-xl text-gray-400">
              Empower your learning journey with expert-led courses, interactive
              content, and a global community of learners.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Star className="w-16 h-16 mb-4 text-blue-500/90" />
              <h4 className="h4 text-xl mb-2">Expert Instructors</h4>
              <p className="text-lg text-gray-400 text-center">
                Learn from industry leaders and experts who bring real-world
                experience into the classroom.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <BookOpen className="w-16 h-16 mb-4 text-blue-500/90" />
              <h4 className="h4 text-xl mb-2">Extensive Course Library</h4>
              <p className="text-lg text-gray-400 text-center">
                Access thousands of courses across various domains, from
                technology to creative arts, business, and more.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Monitor className="w-16 h-16 mb-4 text-blue-500/90" />
              <h4 className="h4 text-xl mb-2">Learn on Any Device</h4>
              <p className="text-lg text-gray-400 text-center">
                Study on your own schedule with courses that are accessible
                anytime, anywhere, on any device.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Layers className="w-16 h-16 mb-4 text-blue-500/90" />
              <h4 className="h4 text-xl mb-2">Interactive Content</h4>
              <p className="text-lg text-gray-400 text-center">
                Engage with quizzes, assignments, and projects that help
                reinforce learning and retention.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Share className="w-16 h-16 mb-4 text-blue-500/90" />
              <h4 className="h4 text-xl mb-2">Global Community</h4>
              <p className="text-lg text-gray-400 text-center">
                Join a vibrant community of learners and share your progress,
                insights, and feedback.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Shield className="w-16 h-16 mb-4 text-blue-500/90" />
              <h4 className="h4 text-xl mb-2">Certification</h4>
              <p className="text-lg text-gray-400 text-center">
                Earn recognized certificates that showcase your skills and
                achievements to potential employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
