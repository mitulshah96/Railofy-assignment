import { getMovieDetail } from '../../actions';
import { Card, Col, Row } from 'antd';

function MovieDetail({
    Poster,
    Title,
    imdbRating,
    Director,
    Language,
    Released,
    Writer,
}) {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={
                            <img
                                alt="example"
                                src={
                                    Poster !== 'N/A'
                                        ? Poster
                                        : 'https://cdn.cwsplatform.com/assets/no-photo-available.png'
                                }
                            />
                        }
                        title={Title}
                    >
                        The movie was directed by {Director} in following
                        Language -{Language}
                        It was Released on {Released} and writer of this movie
                        is {Writer}
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

MovieDetail.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await (await getMovieDetail({ id })).json();
    return res;
};

export default MovieDetail;
