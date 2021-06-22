import Content from "./Content"
import { Row, Col } from 'antd';
import { Tag } from 'antd';
import { Button } from 'antd';

const { CheckableTag } = Tag;

const tagsData_1 = ['Technology', 'Programming', 'Business', 'Javascript', 'Startups', 'Design'];

const tagsData_2 = ['Marketing', 'Productivity', 'Data Science', 'Artificial Intelligence', 'Cryptocurrency', 'Social Media']


function BlogCard( { data }) {
    return (
        <div>
            <Row >
                <Col lg={{span: 16}} >
                <div className="px-10 py-10">
                <h1>YOUR TOPICS</h1>
                    {tagsData_1.map(tag => (
                        <CheckableTag
                            style={{ fontSize: '18px' }}
                            key={tag}
                        >
                            <Button>{tag}</Button>
                        </CheckableTag>
                    ))}
                </div>    
                <Content 
                    slug={data.posts[0].slug}
                    name={data.posts[0].author.name}
                    image={data.posts[0].author.image.url}
                    date={data.posts[0].date}
                    title={data.posts[0].title}
                    description={data.posts[0].description}
                    coverImage={data.posts[0].coverImage.url}
                    read='10 min read'
                />
                <Content 
                    slug={data.posts[1].slug}
                    name={data.posts[1].author.name}
                    image={data.posts[1].author.image.url}
                    date={data.posts[1].date}
                    title={data.posts[1].title}
                    description={data.posts[1].description}
                    coverImage={data.posts[1].coverImage.url}
                    read='5 min read'
                />
                <Content 
                    slug={data.posts[2].slug}
                    name={data.posts[2].author.name}
                    image={data.posts[2].author.image.url}
                    date={data.posts[2].date}
                    title={data.posts[2].title}
                    description={data.posts[2].description}
                    coverImage={data.posts[2].coverImage.url}
                    read='7 min read'
                />
                </Col>
                <Col  lg={{span: 8}} className="hidden py-10" style={{ fontSize: '18px', marginTop: 20, color: '#c5c6c7' }}>
                    <span style={{ marginRight: 8 }}>Categories:</span>
                        {tagsData_2.map(tag => (
                        <CheckableTag
                            style={{ fontSize: '18px' }}
                            key={tag}
                        >
                            
                            <Button>{tag}</Button>
                        </CheckableTag>
                    ))}
                </Col>
            </Row> 
        </div>
    )
}

export default BlogCard
