export default function HeroSection() {
    return (
        <div className="relative px-6 pt-32 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">
                    Flutter Developer
                    <br />
                    and Mobile Expert
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                    Crafting beautiful and performant mobile applications
                    <br />
                    with Flutter and modern development practices.
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800">
                    <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium tracking-wide">
                        Available for work
                    </span>
                </div>
            </div>
        </div>
    );
}