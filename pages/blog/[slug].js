import he from "he";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { getBlogSlugs, getPost } from "../../lib/data";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const getStaticPaths = async () => {

    const slugsRes = await getBlogSlugs();
    const slugs = slugsRes.posts;

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {

    const post = await getPost(params.slug);
  
    return {
      props: {
        post: post.posts[0],
        content: await serialize(he.decode(post.posts[0].content)),
      }
    }
}

function MainBlog({ post, content }) {
    return (
        <div>
            <Header />
            <Row>
                <Col xs={1} sm={4} md={6} lg={5} xl={5}>
                    
                </Col>
                <Col xs={22} sm={16} md={12} lg={14} xl={14}>
                    <div>
                    <h1 className="blog-title">{post.title}</h1>
                    <p className="blog-description">{post.description}</p>
                    </div>
                    <div style={{ display: 'flex'}}>
                    <div>
                        <Avatar src={post.author.image.url} size={64} icon={<UserOutlined />} />
                    </div>
                    <div className="blog-name">
                        <p>{post.author.name}</p>
                        <p>{new Date(post.date).toDateString()}</p>
                    </div>
                    </div>
                    <Image
                        src={post.coverImage.url}
                        alt="coverImage"
                    />
                    <div>
                    {post.tags.map((tag) => {
                        <span key={tag}>{tag}</span>
                    })}
                    </div>
                    <MDXRemote className="blog-content" {...content} />
                </Col>
                <Col xs={1} sm={4} md={6} lg={5} xl={5}>
                    
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default MainBlog
