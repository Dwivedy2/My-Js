
function Card({name="Default User", lvl="200", btnLink="https://www.google.com", value="Default"}) {
    return (
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] me-4">
            <div>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                    alt="test"
                    className="object-cover object-center rounded-t-xl"
                />
            </div>
            <div className="flex flex-col py-3 px-3 pb-10">
                <p className="text-white">{name}</p>
                <p className="text-white">{lvl}</p>
                <a href={btnLink} target="_blank">{value}</a>
            </div>
        </div>
    );
}

export default Card