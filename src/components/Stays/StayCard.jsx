export default function StayCard({ stay }) {
    return (
        <div className="rounded-xl overflow-hidden">
            <img
                src={stay.photo}
                alt={stay.title}
                className="w-full h-64 object-cover rounded-3xl"
            />
            <div className="mt-4">
                <div className="flex items-center justify-between">
                    {stay.superHost && (
                        <span className="border border-gray-800 rounded-full px-3 py-1 text-xs font-bold">
                            SUPER HOST
                        </span>
                    )}
                    <p className="text-gray-500 text-sm flex-grow ml-4">
                        {stay.type} {stay.beds && `· ${stay.beds} beds`}
                    </p>
                    <div className="flex items-center">
                        <span className="material-icons text-[#EB5757]">star</span>
                        <span className="ml-1">{stay.rating}</span>
                    </div>
                </div>
                <h3 className="mt-2 text-base font-semibold">{stay.title}</h3>
            </div>
        </div>
    );
}