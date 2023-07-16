import Lazyloadimage from '../../Image Lazy loading/Lazyloadimage';
import "../../../App.css"


export default function component(props) {
    return (
        <div id='WatchproviderWrapper' style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap" }}>

            {props?.Data?.map((e, index) => {
                return (
                    <div key={index} style={{ height: "130px", width: "125px", margin: "5px", padding: "10px", textAlign: "center" }}>

                        <Lazyloadimage id='WatchproviderImage' css={{ width: "70px", borderRadius: "7px" }} imgurl={e.logo_path} />

                        <p style={{ fontSize: "15px" }}>{e.provider_name}</p>
                    </div>
                )
            })}
        </div>
    )
}
