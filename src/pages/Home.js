import SongCard from '../components/SongCard';
import SectionHeader from '../components/SectionHeader';
import ArtistCard from '../components/ArtistCard';
import AlbumCard from '../components/AlbumCard';

function Home() {
    const Data = [
        {
            imgUrl: 'https://i.pinimg.com/564x/17/d8/ff/17d8ff4be178c4cddb05630000420910.jpg',
            musicName: 'Love Story',
            author: 'Taylor Swift',
        },
        {
            imgUrl: 'https://i1.sndcdn.com/artworks-W86AP4p4wNY1zuR5-tog6CQ-t500x500.jpg',
            musicName: 'Ngày ấy',
            author: 'Ngọt',
        },
        {
            imgUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2023/05/25/5/3/5/f/1684996435586_500.jpg',
            musicName: 'Yên',
            author: 'Hoàng Dũng',
        },
        {
            imgUrl: 'https://i1.sndcdn.com/artworks-uzmx8xPhbzlA3kjl-5oDvYA-t500x500.jpg',
            musicName: 'Từng Quen',
            author: 'Wren Evans',
        },
        {
            imgUrl: 'https://i.scdn.co/image/ab67616d00001e02e50594eb6a3b518dcb78bf59',
            musicName: 'Ngày Nào',
            author: 'Cá Hồi Hoang',
        },
        {
            imgUrl: 'https://upload.wikimedia.org/wikipedia/vi/5/5f/Blackpink-_The_Album.png',
            musicName: 'Pink Venom',
            author: 'BlackPink',
        },
    ];
    const fakeArtistData = [
        {
            artistName: 'Taylor Swift',
            artistRole: 'Nghệ sĩ',
            imgUrlArtist:
                'https://i.iheart.com/v3/catalog/artist/33221?ops=fit(480%2C480)%2Crun(%22circle%22)',
        },
        {
            artistName: 'IU',
            artistRole: 'Nghệ sĩ',
            imgUrlArtist:
                'https://media.vov.vn/sites/default/files/styles/large/public/2023-09/103152iufull-1622611626053-16226116264121957573404.jpg',
        },
        {
            artistName: 'Ed Sheeran',
            artistRole: 'Nghệ sĩ',
            imgUrlArtist:
                'https://vtv1.mediacdn.vn/zoom/640_400/2015/ed-sheeran-1445434934192.jpg',
        },
        {
            artistName: 'Sơn Tùng MTP',
            artistRole: 'Nghệ sĩ',
            imgUrlArtist:
                'https://limosa.vn/wp-content/uploads/2023/12/MTP-viet-tat-cua-tu-gi.jpg',
        },
        {
            artistName: 'Rosé',
            artistRole: 'Nghệ sĩ',
            imgUrlArtist:
                'https://static-images.vnncdn.net/files/publish/2022/9/1/batch-ro3-812.jpg',
        },
        {
            artistName: 'Billie Eilish',
            artistRole: 'Ca sĩ',
            imgUrlArtist:
                'https://hips.hearstapps.com/hmg-prod/images/bilie-eilish-1620055574.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
        },
        {
            artistName: 'Taylor Swift',
            artistRole: 'Nghệ sĩ',
            imgUrlArtist:
                'https://i.iheart.com/v3/catalog/artist/33221?ops=fit(480%2C480)%2Crun(%22circle%22)',
        },
    ];
    const albumsData = [
        {
            AlbumImg:
                'https://upload.wikimedia.org/wikipedia/en/2/21/Boygenius_-_the_record.jpg',
            AlbumTitle: 'The Record',
            AlbumOwner: 'Boygenius',
        },
        {
            AlbumImg: 'https://i.ytimg.com/vi/jj0N_lzwXVE/maxresdefault.jpg',
            AlbumTitle: 'Loi Choi',
            AlbumOwner: 'Wren Evans',
        },
        {
            AlbumImg:
                'https://event.mediacdn.vn/257767050295742464/image/wca/2024/1/2/99-mck-1704216767972807984200.jpg',
            AlbumTitle: '99%',
            AlbumOwner: 'MCK',
        },
        {
            AlbumImg:
                'https://upload.wikimedia.org/wikipedia/en/5/56/Justin_Timberlake_-_Everything_I_Thought_It_Was.png',
            AlbumTitle: 'Everything | I Thought It Was',
            AlbumOwner: 'Justin Timberlake',
        },
        {
            AlbumImg:
                'https://upload.wikimedia.org/wikipedia/vi/3/34/1989Taylor%27sVersion.jpg',
            AlbumTitle: '1989 (Taylors Version)',
            AlbumOwner: 'Taylor Swift',
        },
        {
            AlbumImg:
                'https://i.scdn.co/image/ab67616d0000b2730ecdf596e76b0403506c1375',
            AlbumTitle: 'Đánh đổi',
            AlbumOwner: 'Obito',
        },
    ];
    return (
        <main>
            <div className=' py-20 max-w-screen-xl md:flex flex-wrap justify-between mx-auto p-4 text-white'>
                <div>
                    <SectionHeader
                        url={'/AllTopSongs'}
                        subHeader={'Top Songs'}
                    />
                    <h3 className='text-gray-400 text-[14px] pb-4'>
                        The most played tracks on MusicParty this week
                    </h3>
                    <div className='text-white my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 '>
                        {Data.slice(0, 6).map((song, index) => (
                            <SongCard
                                key={index}
                                song={song}
                                listOfSong={Data}
                            />
                        ))}
                    </div>
                    <SectionHeader
                        url={'/AllTopArtists'}
                        subHeader={'Top Artists'}
                    />
                    <div className='text-white my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 '>
                        {fakeArtistData.slice(0, 6).map((artist, index) => (
                            <ArtistCard
                                key={index}
                                artist={artist}
                                listOfArtist={fakeArtistData}
                            />
                        ))}
                    </div>
                    <SectionHeader
                        url={'/TrendingAlbum'}
                        subHeader={'Album phổ biến'}
                    />
                    <div className='text-white my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 '>
                        {albumsData.slice(0, 6).map((album, index) => (
                            <AlbumCard
                                key={index}
                                album={album}
                            />
                        ))}
                    </div>

                    <SectionHeader url={'/ForYou'} subHeader={'Dành cho bạn'} />
                    <div className='text-white my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 '>
                        {Data.slice(0, 6).map((song, index) => (
                            <SongCard
                                key={index}
                                song={song}
                                listOfSong={Data}
                            />
                        ))}
                    </div>
                    <SectionHeader
                        url={'/RecentlyReleased'}
                        subHeader={'Mới phát gần đây'}
                    />
                    <div className='text-white my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 '>
                        {Data.slice(0, 6).map((song, index) => (
                            <SongCard
                                key={index}
                                song={song}
                                listOfSong={Data}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
