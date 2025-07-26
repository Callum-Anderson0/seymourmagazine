import SignUp from "./SignUp";
import FadeContent from "./FadeComponent";

function vision(){
    return(
        <div className="flex flex-col items-center h-full">
            <FadeContent className="flex flex-col items-center gap-4 h-full text-white">
                            <h2 className="text-5xl font-bold text-center py-4 ">THE VISION</h2>
                            <p className="text-justify px-4">
                                SEYMOUR is not just a magazine, it's a collective space for artists, writers, and creatives. Its aim is to platform smaller artists, offering support, exposure and community. We also hope to play a role in the return of print media ... PRINT IS NOT DEAD. To get involved, drop me a message on Instagram, my dms are always open and I'd looove to hear from you !!
                            </p>
            </FadeContent>
        </div>
    );
}

export default vision;