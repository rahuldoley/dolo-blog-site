import { GraphQLClient, gql } from 'graphql-request';

export const getPosts = async () => {
    const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckq28pmha8tj601xldx4lfnds/master";
  
    const graphQLClient = new GraphQLClient(endpoint);

    const query = gql`
    {
        posts {
        title
        slug
        description
        coverImage {
            url
        }
        date
        tags
        author {
            name
            image {
            url
            width
            height
            }
        }
        }
    }
    `;

    return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
    const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckq28pmha8tj601xldx4lfnds/master";
  
    const graphQLClient = new GraphQLClient(endpoint);

    const query = gql`
        query getPost($slug: String!) {
            posts(where: {slug: $slug}) {
            title
            slug
            description
            coverImage {
            url
            }
            date
            content
            tags
            author {
            name
            image {
                url
                width
                height
            }
            }
        }
        }
    `;

    const variables = {
        slug,
    }

    return await graphQLClient.request(query, variables)
}

export const getBlogSlugs = async () => {
    const endpoint = 'https://api-ap-northeast-1.graphcms.com/v2/ckq28pmha8tj601xldx4lfnds/master'

    const graphQLClient = new GraphQLClient(endpoint)

    const query = gql`
    {
        posts {
            slug
        }
    }
    `;

    return await graphQLClient.request(query)
}