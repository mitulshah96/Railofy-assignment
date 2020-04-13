import { getMovieDetail } from '../../actions';
import { Card } from 'antd';

function MovieDetail({
    Poster,
    Title,
    imdbRating,
    Director,
    Language,
    Released,
    Writer,
    ...props
}) {
    const { Meta } = Card;
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Poster} />}
        >
            <Meta
                title={Title}
                description={`The movie was directed by ${Director} in following ${Language} 
                It was Released on ${Released} and writer of this movie is ${Writer}`}
            />
        </Card>
    );
}

MovieDetail.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await (await getMovieDetail({ id })).json();
    return res;
};

export default MovieDetail;
