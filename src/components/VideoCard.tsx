export function VideoCard(props: any) {
  return (
    <div>
      <img src={props.thumbnailImage} alt="thumbnail" className="rounded-xl"/>
      <div className="grid grid-cols-12 pt-3">
        <div className="col-span-1">
          <img className={" rounded-full w-20 h-20"} src={props.profileImage} alt="profile" />
        </div>
        <div className="col-span-11 pl-5">
            <div>
            {props.title}
            </div>
            <div className="text-sm text-gray-500">
                {props.channel}
            </div>
            <div className="text-sm text-gray-500">
                {props.views} | {props.time}
            </div>
        </div>
      </div>
    </div>
  );
}
