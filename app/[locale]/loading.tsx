export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
            <div className="space-y-4 text-center">
                <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-green-500 text-sm animate-pulse">Loading...</p>
            </div>
        </div>
    );
} 