import { Photo } from "@/actions/photos-get";
import FeedFotos from "./FeedFotos";

type FeedType = {
    fotos: Photo[]
}

export default function Feed({fotos}: FeedType) {
    return (
        <div>
            <FeedFotos fotos={fotos} />
        </div>
    );
}