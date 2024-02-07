import React, { useState } from 'react'

const [selectedPhoto, setSelectedPhoto] = useState(null)

const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
            setSelectedPhoto(reader.result)
            setPhotos([...photos, selectedPhoto])
            setSelectedPhoto(null)
        }
        reader.readAsDataURL(file)
    }
}

export default function Test() {
  return (
      <div>
                                {(selectedPhoto && (
                                    <img
                                        src={selectedPhoto}
                                        alt="Выбранное фото"
                                    />
                                )) || <img src={addFotoIcon} />}
                                <div>
                                    <span>
                                        Перетащите изображение для изменения
                                    </span>
                                    <div>или <label htmlFor="file-input">
                                            обзор
                                        </label>
                                        <input
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                            id="file-input"
                                            type="file"
                                        />
                                    </div>
                                </div>
                            </div>
  )
}
