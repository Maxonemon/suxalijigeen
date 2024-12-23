interface YouTubeVideoProps {
  title: string;
  videoId: string;
  description: string;
}

export function YouTubeVideo({
  title,
  videoId,
  description,
}: YouTubeVideoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
      <div className=" h-[300px]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          title={title}
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-orange-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
