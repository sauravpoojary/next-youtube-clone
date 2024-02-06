import { VideoCard } from "./VideoCard";

const Videos = [
    {
        title: "System Design Tinder",
        channel: "Gaurav Sen",
        views: "2.4M",
        time: "2 days ago",
        thumbnailImage: "/photo.jpg",
        profileImage: "/profile.jpg",
    },
    {
        title: "System Design Tinder",
        channel: "Gaurav Sen",
        views: "2.4M",
        time: "2 days ago",
        thumbnailImage: "/photo.jpg",
        profileImage: "/profile.jpg",
    },
    {
        title: "System Design Tinder",
        channel: "Gaurav Sen",
        views: "2.4M",
        time: "2 days ago",
        thumbnailImage: "/photo.jpg",
        profileImage: "/profile.jpg",
    },
    {
        title: "System Design Tinder",
        channel: "Gaurav Sen",
        views: "2.4M",
        time: "2 days ago",
        thumbnailImage: "/photo.jpg",
        profileImage: "/profile.jpg",
    }
]

export function VideoGrid(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-">
           {
               Videos.map((video, index) => (
                   <VideoCard
                       key={index}
                       title={video.title}
                       channel={video.channel}
                       views={video.views}
                       time={video.time}
                       thumbnailImage={video.thumbnailImage}
                       profileImage={video.profileImage}
                   />
               ))
           }
        </div>
    );
}