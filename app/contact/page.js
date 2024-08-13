export default function Contact() {
  return (
    <div className="background-container flex justify-center items-center min-h-screen">
      <div className="container">
        <h1 className="text-center white montserrat pb-5">Projects</h1>
        <div className="contact-container rounded p-4">
          <form
            action="https://formspree.io/xyyjvbzz"
            method="POST"
            className="space-y-4"
          >
            <div className="form-group">
              <label for="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First & Last Name"
                required
              />
            </div>
            <div className="form-group">
              <label
                for="_replyto"
                className="block text-gray-700 font-bold mb-2"
              >
                Email address
              </label>
              <input
                name="_replyto"
                type="email"
                className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label
                for="subject"
                className="block text-gray-700 font-bold mb-2"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What is it you want to discuss?"
              />
            </div>
            <div className="form-group">
              <label
                for="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Please elaborate on your thoughts..."
                required
              ></textarea>
            </div>
            <button
              className="rounded-full bg-transparent border border-blue-500 py-2 px-4"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
