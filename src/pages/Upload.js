import { useRef, useState, useEffect } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { IoMdCloudUpload } from 'react-icons/io';
import axios from 'axios';
const Upload = () => {
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [musicName, setMusicName] = useState('');
  const [description, setDesscription] = useState('');
  const [selectedPrivacy, setSelectedPrivacy] = useState('Private');
  const [musicGerne, setMusicGerne] = useState([]);
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [duration, setDuration] = useState(0);
  const [show, setShow] = useState(false);
  const [isEnableUpload, SetIsEnableUpload] = useState(true);
  const musicInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const AUDIO_COMPRESS_LINK = 'https://products.aspose.app/audio/compress';
  const IMAGE_COMPRESS_LINK = 'https://imagecompressor.com/';

  const onMusicChange = async (event) => {
    var selectedFile = event.target.files[0];
    var fileSizeInBytes = selectedFile.size;
    var fileSizeInMB = fileSizeInBytes / (1024 * 1024);
    if (fileSizeInMB > 15) {
      Swal.fire({
        title: 'Audio file upload failed!',
        text: `Your audio exceeds the 15MB limit. Please use the audio compressor tool at this link '${AUDIO_COMPRESS_LINK}'`,
        icon: 'error',
      });
      event.target.value = null;
      return;
    } else if (!selectedFile.type.startsWith('audio/')) {
      Swal.fire({
        title: 'Audio upload failed!',
        text: 'You have uploaded an incorrect file type. Please upload an audio file.',
        icon: 'error',
      });
      event.target.value = null;
      return; // Dừng việc thực hiện các hành động khác nếu có lỗi
    } else {
      setSelectedMusic(selectedFile);
      setShow(!show);
    }
  };
  useEffect(() => {
    if (selectedMusic) {
      console.log(selectedMusic);
      const audio = audioRef.current;
      const objectURL = URL.createObjectURL(selectedMusic);
    }
  }, [selectedMusic]);
  const handleRadioChange = (event) => {
    setSelectedPrivacy(event.target.id);
  };
  const handleCancelUpload = () => {
    setShow(false);
  };
  const handleMusicSelection = (event) => {
    event.preventDefault();
    musicInputRef.current.click();
  };
  const handleImageSelection = (event) => {
    event.preventDefault();
    imageInputRef.current.click();
  };
  const onImageChange = (event) => {
    if (event.target.files.length > 0) {
      var selectedFile = event.target.files[0];
      var fileSizeInBytes = selectedFile.size;

      // Kiểm tra dung lượng theo đơn vị MB
      var fileSizeInMB = fileSizeInBytes / (1024 * 1024);
      if (fileSizeInMB > 5) {
        Swal.fire({
          title: 'Image file upload failed!',
          text: `Your image exceeds the 5MB limit. Please use the image compressor tool at this link ${IMAGE_COMPRESS_LINK}`,
          icon: 'error',
        });
        event.target.value = null;
      } else if (!selectedFile.type.startsWith('image/')) {
        Swal.fire({
          title: 'Image upload failed!',
          text: 'You have uploaded an incorrect file type. Please upload an image file.',
          icon: 'error',
        });
        event.target.value = null;
        return; // Dừng việc thực hiện các hành động khác nếu có lỗi
      } else {
        setSelectedImage(event.target.files[0]);
      }
    }
  };

const handleUploadMusic = async (e) => {
  e.preventDefault();

  // Kiểm tra xem tất cả các dữ liệu cần thiết đã được nhập chưa
  // theem || !musicGerne.length
  if (!selectedImage || !selectedMusic || !musicName || !artist  || !description || !lyrics) {
    toast.warn('Please fill in all required fields!');
    console.log("selectedImage", selectedImage)
    console.log("selectedMusic", selectedMusic)
    console.log("musicName", musicName)
    console.log("artist", artist)
    console.log("musicGerne", musicGerne)
    console.log("description", description)
    console.log("lyrics", lyrics)
    return;
  }

  // Tạo một đối tượng FormData để gửi dữ liệu và tệp
  const formData = new FormData();
  formData.append('musicName', musicName);
  formData.append('author', artist);
  formData.append('description', description);
  formData.append('lyrics', lyrics);
  formData.append('releaseYear', new Date().getFullYear());
  formData.append('musicFile', selectedMusic);
  formData.append('imageFile', selectedImage);
  formData.append('genre', "tesst")
  // musicGerne.forEach((genre) => {
  //   formData.append('genre', genre.label);
  // });

  try {
    // Gửi yêu cầu POST đến API
    const response = await axios.post('http://localhost:5000/api/musics/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Đảm bảo cài đặt header đúng cho dữ liệu FormData
      },
    });
    
    // Xử lý phản hồi từ server nếu cần
    console.log('Upload successful:', response.data);
    // Nếu cần thực hiện thêm hành động sau khi upload thành công, ví dụ: hiển thị thông báo, chuyển hướng người dùng, v.v.
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Upload failed:', error);
    // Nếu cần hiển thị thông báo hoặc xử lý lỗi khác
  }
};
  const colorStyles = {
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: '#181818',
        paddingTop: '4px',
        paddingBottom: '4px',
        border: '1px solid', // Set the default border style
        borderColor: '#181818', // Set the default border color
        ':hover': {
          borderColor: 'white', // Set the border color to white on focus
        },
      };
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: '#181818' };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: '#555555',
        color: '#fff',
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        color: '#fff',
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        color: '#fff',
        cursor: 'pointer',
        ':hover': {
          color: 'gray',
        },
      };
    },
  };

  const [showOtherInput, setShowOtherInput] = useState(false);
  const handleInputGenreChange = (inputValue, actionMeta) => {
    // Handle trc khi đưa vô
  };

  const handleGenreChange = (selectedOption, actionMeta) => {
    if (selectedOption.length <= 3) {
      setMusicGerne(selectedOption);
    }
    setShowOtherInput(selectedOption.some((option) => option.value === 'other'));
  };

  return (
    <div className="h-full w-full">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        className=""
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className=" text-white bg-black opacity-90 ">
        {loading ? (
          <div className="text-center w-screen h-screen py-60">
            <span className="loader h-20 w-20 "></span>
          </div>
        ) : (
          <main className=" container py-24  mx-auto px-4 md:px-0 md:w-[60%] ">
            {!show ? (
              <form className="min-h-[400px] flex items-center justify-center flex-col gap-4 rounded-xl bg-[#202020] hover:bg-gray-800">
                <IoMdCloudUpload className="text-5xl md:text-7xl" />
                <h1 className="text-base md:text-2xl font-bold text-center">
                  Choose or drag and drop files to upload.
                </h1>
                <div>
                  <input
                    type="file"
                    onChange={onMusicChange}
                    accept="audio/*"
                    style={{ display: 'none' }}
                    ref={musicInputRef}
                  />
                  <button
                    className="bg-green-500 hover:font-semibold text-sm md:text-base text-white py-2 px-2 md:px-6 rounded hover:scale-105 duration-300 mt-2"
                    onClick={handleMusicSelection}
                  >
                    Choose File
                  </button>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleUploadMusic}
                className=" flex flex-col text-xs md:text-base border border-gray-800 rounded shadow bg-[#181818] my-20 px-4 "
              >
                <div className="flex flex-row justify-between mt-14 md:px-16 gap-8">
                  <input
                    type="file"
                    onChange={onImageChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                    ref={imageInputRef}
                  />
                  {!selectedImage ? (
                    <div className="flex items-end justify-center w-40 h-40 md:w-56 md:h-56 bg-gradient-to-r from-[#846170] to-[#70929c] rounded-lg">
                      <button
                        className="mb-4 bg-slate-600 flex rounded-lg items-center px-2 gap-2 py-1 "
                        type="button"
                        onClick={handleImageSelection}
                      >
                        <i class="ri-camera-line"></i>
                        <p className="text-[14px]">Upload image</p>
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-56 h-56">
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="SongImage"
                        className="rounded object-cover h-56 w-56"
                      />
                      <button
                        className=" opacity-0 hover:opacity-100 absolute bottom-0 mb-4 bg-slate-600 ml-10 flex rounded-lg items-center px-2 gap-2 py-1"
                        onClick={handleImageSelection}
                        type="button"
                      >
                        <i class="ri-camera-line"></i>
                        <p className="text-[14px]">Upload image</p>
                      </button>
                    </div>
                  )}

                  <div className="w-3/4 flex flex-col">
                    <div className="flex flex-row gap-1 items-center ">
                      <p className="font-bold text-sm">Title</p>
                      <span className="text-red-600">*</span>
                    </div>
                    <input
                      className="w-full border bg-[#181818] mt-2 px-2 rounded py-2 focus:border-slate-400"
                      placeholder={selectedMusic.name}
                      value={musicName}
                      onChange={(e) => {
                        setMusicName(e.target.value);
                      }}
                      required
                    />
                    <div className="my-2">
                      <div className="flex flex-row gap-1 items-center ">
                        <p className="font-bold text-sm">Artist</p>
                        <span className="text-red-600">*</span>
                      </div>
                      <input
                        type="text"
                        className="border bg-[#181818] px-2 rounded mt-1 py-2 w-full"
                        value={artist}
                        onChange={(e) => {
                          setArtist(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <div className="flex flex-row gap-1 items-center ">
                        <p className="font-bold text-sm">Genre</p>
                        <span className="text-red-600">*</span>
                      </div>
                      <div>
                        <Select
                          isMulti
                          styles={colorStyles}
                          placeholder="Pick your genre"
                          onInputChange={handleInputGenreChange}
                          onChange={handleGenreChange}
                          value={''}
                          maxValues={3}
                        />
                        {showOtherInput && (
                          <input
                            className=" mt-4 border bg-[#181818] px-2 rounded py-2 w-full"
                            type="text"
                            placeholder="Please fill your other genre"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row gap-1 items-center mt-2">
                      <p className="font-bold text-sm">Description</p>
                      <span className="text-red-600">*</span>
                    </div>
                    <textarea
                      value={description}
                      onChange={(e) => setDesscription(e.target.value)}
                      name="descriptionSong"
                      id="descriptionSong"
                      className=" resize-none h-28 border bg-[#181818] px-2 rounded mt-2 py-1"
                      placeholder="Describe your track"
                      cols="20"
                      rows="10"
                    ></textarea>
                    <div className="flex flex-row gap-1 items-center mt-2">
                      <p className="font-bold text-sm">Lyrics</p>
                      <span className="text-red-600">*</span>
                    </div>
                    <textarea
                      value={lyrics}
                      onChange={(e) => setLyrics(e.target.value)}
                      name="lyricSong"
                      id="lyricSong"
                      className=" h-60 border bg-[#181818] px-2 rounded py-2"
                      cols="30"
                      rows="10"
                    ></textarea>
                    <p className="font-bold mt-2">Privacy</p>
                    <div className="flex mt-4 flex-col gap-1">
                      <div>
                        <input
                          type="radio"
                          name="visibility"
                          id="Public"
                          checked={selectedPrivacy === 'Public'}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="Public" className="cursor-pointer py-2 px-4 rounded ">
                          Public
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="visibility"
                          id="Private"
                          checked={selectedPrivacy === 'Private'}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="Private" className="cursor-pointer py-2 px-4 rounded">
                          Private
                        </label>
                      </div>
                      <p className="ml-7 text-xs text-gray-400">
                        Only you and people share a secret link with will be able to listen to this track
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-16 mt-4 py-4 items-center border-gray-800 border-t-[1px]">
                  <div className="flex items-center gap-1">
                    <span className="text-red-600">*</span>
                    <p className="text-xs font-bold">Require field</p>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <button
                      onClick={handleUploadMusic}
                      type="submit"
                      className=" bg-green-500 hover:scale-105 duration-300 px-6 rounded py-2 text-white"
                    >
                      Save
                    </button>
                    <button
                      className="hover:bg-slate-300 px-4 rounded py-2 hover:text-black"
                      onClick={handleCancelUpload}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            )}{' '}
          </main>
        )}
      </div>
    </div>
  );
};

export default Upload;
