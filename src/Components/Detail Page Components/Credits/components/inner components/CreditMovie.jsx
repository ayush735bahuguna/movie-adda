import useFetch from '../../../../../Api/useFetch';
import Footer from "../../../../Footer/Footer";
import ImageCard from "../../../../Image Card/ImageCard";
import Loader from '../../../../loader/loader';

export default function CreditMovie(props) {


    const { data, loading } = useFetch(`/person/${props?.personId}/combined_credits`);

    return (
        <>
            <h3 style={{ margin: " 46px 30px 12px" }}>Related Shows :</h3>

            {data?.cast?.length !== 0 ? (
                !loading ? (
                    <div style={{
                        margin: "20px", display: "flex", overflow: "scroll hidden"
                    }}>
                        {data?.cast?.slice(0, 20).map((e, index) => {
                            return (

                                <a href={`/${e.media_type}/${e.id}`} key={index} style={{ margin: "5px" }}>
                                    <ImageCard DataArray={e} />
                                </a>

                            )
                        })}

                    </div>
                ) : (<Loader />)
            ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "420px" }}>
                    <div> No Related Movies / Tv-Series available </div>
                </div>
            )}
            <Footer />
        </>
    )
}
