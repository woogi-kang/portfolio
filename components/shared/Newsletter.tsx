export default function Newsletter() {
    return (
        <section className="rounded-2xl border border-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-6">
                Subscribe to my newsletter for Flutter development tips and updates.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-green-500"
                />
                <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors"
                >
                    Subscribe
                </button>
            </form>
        </section>
    );
} 