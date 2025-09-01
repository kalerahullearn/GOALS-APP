export const ProgressBar = ({progress}) => {
    return (
        <div>
            <div className="w-full bg-gray-200 h-2 mt-3 rounded-full">
                <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
                />
            </div>
            <p className="text-xs text-gray-500 mt-2">{progress}% Complete</p>
        </div>
    );
}