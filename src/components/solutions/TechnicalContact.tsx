const TechnicalContact: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      <div className="relative z-10 p-10 bg-opacity-50 bg-black rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Technical Contact</h1>
        <p className="mb-6">
          Get in touch with our technical team for support.
        </p>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded-md"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded-md"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-black rounded-md"
              id="message"
              name="message"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default TechnicalContact;
