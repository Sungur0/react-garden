import React from 'react'
import StarRating from './props/StarRating'
import img1 from '../assets/saksı1.jpg'
import img2 from '../assets/saksı2.jpg'
import { useState } from 'react'
const CommentItem = ({ comment, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Düzenleme işlemi tamamlandığında burada backend'e güncelleme isteği gönderilebilir.
        onEdit(comment.id, editedText);
        setIsEditing(false);
    };

    const handleDelete = () => {
        // Silme işlemi tamamlandığında burada backend'e silme isteği gönderilebilir.
        onDelete(comment.id);
    };

    const handleCancel = () => {
        // İptal işlemi sırasında düzenleme modundan çıkılacak.
        setIsEditing(false);
        // Düzenleme iptal edildiğinde orijinal metni geri yükleyebilirsiniz.
        setEditedText(comment.text);
    };
    return (
        <div>

            <div className="account-comments">
                <div className="container">

                    <div className="row">
                        <div className="col-3">
                            <div className="account-info-image">
                                <img src={comment.src} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="acc-comment">
                                <div className="comment-header">
                                    <h2>{comment.title}</h2>
                                    <StarRating />
                                </div>
                                <div className="comment-main">
                                    {isEditing ? (
                                        <div className='comment-text-edit'>
                                            <textarea
                                                value={editedText}
                                                onChange={(e) => setEditedText(e.target.value)}
                                            />
                                            <div className="comment-area-btn">
                                            <button onClick={handleSave}>Tamamla</button>
                                            <button onClick={handleCancel}>İptal</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <p>{comment.text}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="acc-com-btn">
                                <button className='comment-edit' onClick={handleEdit}>
                                    Düzenle
                                </button>
                                <button className='comment-delete' onClick={handleDelete}>
                                    Sil
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

const AccountComments = () => {

    const [comments, setComments] = useState([
        { id: 1, title: 'Eşmeya Saksısı / Aechmea Blue Rain', src: img1, text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non quam ab. Ea, unde, distinctio deleniti nam maxime exercitationem, tempore quae quia quisquam dicta harum rerum voluptatibus? Numquam, a autem.' },
        { id: 2, title: 'Eşmeya Saksısı / Aechmea Blue Rain', src: img2, text: 'Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi' },
    ]);
    const handleEditComment = (commentId, newText) => {
        const updatedComments = comments.map((comment) =>
            comment.id === commentId ? { ...comment, text: newText } : comment
        );
        setComments(updatedComments);
    };

    const handleDeleteComment = (commentId) => {
        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        setComments(updatedComments);
    };
    return (
        <div>
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    onEdit={handleEditComment}
                    onDelete={handleDeleteComment}
                />
            ))}
        </div>
    )
}

export default AccountComments