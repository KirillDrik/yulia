import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import './Gallery.css';

interface Image {
    id: number;
    url: string;
}

interface Album {
    id: number;
    title: string;
    thumbnail: string;
    images: Image[];
}

interface GalleryProps {
    albums: Album[];
}

const Gallery: React.FC<GalleryProps> = ({ albums }) => {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

    const isEmpty = !albums || albums.length === 0;

    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <h2 className="premium-underline">Галерея</h2>

                {isEmpty ? (
                    // 🔹 ВРЕМЕННАЯ ПЛАШКА С КОДОМ
                    <div className="album-card code-placeholder">
                        <pre>
{`import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import './Gallery.css';
// ...и так далее :)
`}
                        </pre>
                        <p>Заглушка — код Gallery.tsx (пока нет админки)</p>
                    </div>
                ) : (
                    // 🔹 ОСНОВНОЙ КОД, КОТОРЫЙ БУДЕТ РАБОТАТЬ С АДМИНКОЙ
                    <div className="albums-grid">
                        {albums.map(album => (
                            <div
                                key={album.id}
                                className="album-card"
                                onClick={() => setSelectedAlbum(album)}
                            >
                                <img src={album.thumbnail} alt={album.title} />
                                <p>{album.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedAlbum && (
                <div className="modal-overlay" onClick={() => setSelectedAlbum(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedAlbum(null)}>
                            <FaTimes />
                        </button>
                        <h3>{selectedAlbum.title}</h3>
                        <div className="album-images">
                            {selectedAlbum.images.map(img => (
                                <img key={img.id} src={img.url} alt={`Фото ${img.id}`} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
