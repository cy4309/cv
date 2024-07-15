import React from 'react';
// redux
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '@/features/counter/counterSlice';

import IntroductionSection from '@/containers/HomePage/IntroductionSection';
import SkillSection from '@/containers/HomePage/SkillSection';
import JobSection from '@/containers/HomePage/JobSection';
import EducationSection from '@/containers/HomePage/EducationSection';
import LetterSection from '@/containers/HomePage/LetterSection';
import TestimonialsSection from '@/containers/HomePage/TestimonialsSection';

function HomePage() {
  // const count = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="home__wrapper">
      <IntroductionSection />
      <SkillSection />
      <JobSection />
      <EducationSection />
      <LetterSection />
      <TestimonialsSection />
      {/* <div className="count">
        <p>Count: {count}</p>
        <button
          className="rounded-full bg-blue-500"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div> */}
      {/* <section className="text-gray-700 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            ></textarea>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
