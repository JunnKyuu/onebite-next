import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import style from './[id].module.css';
import fetchOneBook from '@/lib/fetch-one-book';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
        ],
        fallback: true,
    };
}

export const getStaticProps = async(context: GetServerSidePropsContext) => {
    const id = context.params!.id;
    const book = await fetchOneBook(Number(id));

    if(!book) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            book,
        },
    };
}

export default function Page({book}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();

    if(router.isFallback) {
        return <div>로딩중입니다.</div>
    }
    
    if(!book) {
        return <div>책 정보를 불러올 수 없습니다.</div>
    }
    
    const {
        id, title, subTitle, author, publisher, description, coverImgUrl
    } = book;

    return (
        <div className={style.container}>
            <div
                className={style.cover_img_container}
                style={{ backgroundImage: `url('${coverImgUrl}')` }}>
                <img src={coverImgUrl} />
            </div>
            <div className={style.title}>{title}</div>
            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.author}>{author} | {publisher}</div>
            <div className={style.description}>{description}</div>
        </div>
    )

}