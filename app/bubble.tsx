type Props = {
    message?: string;
}

export default function Bubble({message}:Props){

    return(
        <div className="bg-blue-400 p-10 rounded-2xl m-10">
            {message}
        </div>
    )
}