import { List, Avatar, Space } from 'antd';
import Image from 'next/image';
import Link from "next/link";

function Content({ name, date, description, title, coverImage, read, image, slug }) {
    console.log('slug', slug)
    
    const IconText = ({ text }) => (
        <Space>
            
            {text}
        </Space>
    );

    const listData = [];
    {
        listData.push({
        slug: slug,
        name: name,
        avatar: image,
        date: date,
        read: read,
        description: title,
        content: description,
        });
    }

    return (
        <div className="px-10 py-3">
             <List
                    itemLayout="vertical"
                    size="small"
                    dataSource={listData}
                    style={{borderBottom: '1px solid #c7c7c3'}}
                    renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                        <IconText text={item.date} key="list-vertical-star-o" />,
                        <IconText text={item.read} key="list-vertical-like-o" />,
                        ]}
                        extra={ <Image
                            width={272}
                            height={150}
                            alt="logo"
                            src={coverImage}
                            objectFit="cover"
                        />
                        }
                    >
                        <List.Item.Meta
                    
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href} >{item.name}</a>}
                        
                        description={ <div key={item.slug} >
                                      <Link  href={`/blog/${item.slug}`}>{item.description}</Link>
                                    </div>}
                        />
                        {item.content}
                        
                    </List.Item>
                    )}
                />
        </div>
    )
}

export default Content
