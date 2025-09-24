const postData = [{
    id: 1,
    user: {
        id: 1,
        name: "Kwame Nkrumah",
        profilePicture: "data:image/jpeg;base64,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"
    },
    image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1676E/production/_120641029_e327e089-96d6-4a5d-8423-61ebc755817d.jpg.webp",
    caption: " Ghana is free at last! #Ghana #IndependenceDay",
    likes: 100,
    isLiked: false,
    date: "January 1, 1960",
    comments: [
        {
            id: 1,
            user: {
                id: 2,
                name: "Fathia Nkrumah"
            },
            text: "So proud of our country!"
        },
        {
            id: 2,
            user: {
                id: 3,
                name: "William Ofori Atta"
            },
            text: "Long live Ghana"
        },
        {
            id: 3,
            user: {
                id: 4,
                name: "Kwesi Botchwey"
            },
            text: "Happy Independence Day to all Ghanaians!"
        },
        {
            id: 4,
            user: {
                id: 5,
                name: "Nana Akufo-Addo"
            },
            text: "Let's continue to build a better Ghana!"
        }
    ]
},
{
    id: 2,
    user: {
        id: 4,
        name: "Yaa Asantewaa",
        profilePicture: "https://dangerouswomenproject.org/wp-content/uploads/2016/07/timthumb.jpg"
    },
    image: "https://barbadostoday.bb/wp-content/uploads/2021/02/Yaa-Asantewaa-was-the-queen-mother-of-Ejisu-in-the-Ashanti-Empire.-1.png",
    caption: "To the ladies out there, keep shining and breaking barriers! #WomenEmpowerment #GirlPower",
    likes: 250,
    isLiked: false,
    date: "February 15, 1904",
    comments: [
        {
            id: 1,
            user: {
                id: 5,
                name: "Alice Brown"
            },
            text: "Yummy! Recipe please?"
        },
        {
            id: 2,
            user: {
                id: 6,
                name: "Bob White"
            },
            text: "Looks so good!"
        }
    ]
},
{
    id: 3,
    user: {
        id: 7,
        name: "Theodosia Okoh",
        profilePicture: "https://pbs.twimg.com/media/E35IZKMWQAIrHJw.jpg"
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSRpy9mVahCo8GSHc9xed5CDgfdCPvfS2Zg&s",
    caption: "My prayer is for the flag to always fly high and for Ghana to prosper! #GhanaFlag #ProudGhanaian",
    likes: 180,
    isLiked: false,
    date: "March 10, 1957",
    comments: [
        {
            id: 1,
            user: {
                id: 8,
                name: "John Rawlings"
            },
            text: "Beautiful flag"
        },
        {
            id: 2,
            user: {
                id: 9,
                name: "John Kufuor"
            },
            text: "Indeed, a symbol of our unity and strength"
        }
    ]
}];
export default postData;