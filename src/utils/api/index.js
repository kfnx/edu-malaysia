import axios from "axios";

const base_url = "https://app-13a41883-30f6-425f-b5f7-7264fc31a1e7.cleverapps.io";

const mockTeachersResponse = [
  {
    id: "5df4e8fed82b317c610747be",
    created_at: "2019-12-14T13:51:58.975Z",
    updated_at: "2019-12-14T13:51:58.975Z",
    first_name: "Asep",
    last_name: "Last",
    place_of_birth: "DKI Jakarta",
    date_of_birth: "1997-12-31",
    gender: "L",
    religion: "Kadang Muslim",
    university: "Institut Teknologi Bandung",
    major: "teknik informatika",
    year_of_dedication: "06"
  },
  {
    id: "5df1f393d82b317c617dc2b9",
    created_at: "2019-12-12T08:00:19.327Z",
    updated_at: "2019-12-12T08:00:19.327Z",
    first_name: "Fidel",
    last_name: "Ramadhan",
    place_of_birth: "DKI Jakarta",
    date_of_birth: "1997-12-31",
    gender: "L",
    religion: "Muslim",
    university: "Institut Teknologi Bandung",
    major: "teknik informatika",
    year_of_dedication: "06"
  },
  {
    id: "5df1f325d81c317c617dc2b2",
    created_at: "2019-12-12T01:00:19.327Z",
    updated_at: "2019-12-12T01:00:19.327Z",
    first_name: "Cindy",
    last_name: "Salim",
    place_of_birth: "Bandung",
    date_of_birth: "1992-11-21",
    gender: "P",
    religion: "Budha",
    university: "Institut Keseninan Bandung",
    major: "teknik menggambar",
    year_of_dedication: "02"
  },
  {
    id: "5df4e8fed82b317c610747bd",
    created_at: "2019-12-14T13:51:58.975Z",
    updated_at: "2019-12-14T13:51:58.975Z",
    first_name: "Asep",
    last_name: "Last",
    place_of_birth: "DKI Jakarta",
    date_of_birth: "1997-12-31",
    gender: "L",
    religion: "Kadang Muslim",
    university: "Institut Teknologi Bandung",
    major: "teknik informatika",
    year_of_dedication: "06"
  },
  {
    id: "5df1f393d82b317c617dc2b1",
    created_at: "2019-12-12T08:00:19.327Z",
    updated_at: "2019-12-12T08:00:19.327Z",
    first_name: "Fidel",
    last_name: "Ramadhan",
    place_of_birth: "DKI Jakarta",
    date_of_birth: "1997-12-31",
    gender: "L",
    religion: "Muslim",
    university: "Institut Teknologi Bandung",
    major: "teknik informatika",
    year_of_dedication: "06"
  },
  {
    id: "5df1f325d81c317c617dc2b3",
    created_at: "2019-12-12T01:00:19.327Z",
    updated_at: "2019-12-12T01:00:19.327Z",
    first_name: "Cindy",
    last_name: "Salim",
    place_of_birth: "Bandung",
    date_of_birth: "1992-11-21",
    gender: "P",
    religion: "Budha",
    university: "Institut Keseninan Bandung",
    major: "teknik menggambar",
    year_of_dedication: "02"
  },
  {
    id: "5df4e8fed82b317c610747bc",
    created_at: "2019-12-14T13:51:58.975Z",
    updated_at: "2019-12-14T13:51:58.975Z",
    first_name: "Asep",
    last_name: "Last",
    place_of_birth: "DKI Jakarta",
    date_of_birth: "1997-12-31",
    gender: "L",
    religion: "Kadang Muslim",
    university: "Institut Teknologi Bandung",
    major: "teknik informatika",
    year_of_dedication: "06"
  },
  {
    id: "5df1f393d82b317c617dc2b4",
    created_at: "2019-12-12T08:00:19.327Z",
    updated_at: "2019-12-12T08:00:19.327Z",
    first_name: "Fidel",
    last_name: "Ramadhan",
    place_of_birth: "DKI Jakarta",
    date_of_birth: "1997-12-31",
    gender: "L",
    religion: "Muslim",
    university: "Institut Teknologi Bandung",
    major: "teknik informatika",
    year_of_dedication: "06"
  },
  {
    id: "5df1f325d81c317c617dc2b5",
    created_at: "2019-12-12T01:00:19.327Z",
    updated_at: "2019-12-12T01:00:19.327Z",
    first_name: "Cindy",
    last_name: "Salim",
    place_of_birth: "Bandung",
    date_of_birth: "1992-11-21",
    gender: "P",
    religion: "Budha",
    university: "Institut Keseninan Bandung",
    major: "teknik menggambar",
    year_of_dedication: "02"
  },
  {
    id: "5df4e8fed82b317c610747ba",
    created_at: "2019-12-14T13:51:58.975Z",
    updated_at: "2019-12-14T13:51:58.975Z",
    first_name: "Asep",
    last_name: "Last",
    place_of_birth: "DKI Jakarta",
    date_of_birth: "1997-12-31",
    gender: "L",
    religion: "Kadang Muslim",
    university: "Institut Teknologi Bandung",
    major: "teknik informatika",
    year_of_dedication: "06"
  },
  {
    id: "5df1f393d82b317c617dc2b4",
    created_at: "2019-12-12T08:00:19.327Z",
    updated_at: "2019-12-12T08:00:19.327Z",
    first_name: "Fidel",
    last_name: "Ramadhan",
    place_of_birth: "DKI Jakarta",
    date_of_birth: "1997-12-31",
    gender: "L",
    religion: "Muslim",
    university: "Institut Teknologi Bandung",
    major: "teknik informatika",
    year_of_dedication: "06"
  },
  {
    id: "5df1f325d81c317c617dc2b6",
    created_at: "2019-12-12T01:00:19.327Z",
    updated_at: "2019-12-12T01:00:19.327Z",
    first_name: "Cindy",
    last_name: "Salim",
    place_of_birth: "Bandung",
    date_of_birth: "1992-11-21",
    gender: "P",
    religion: "Budha",
    university: "Institut Keseninan Bandung",
    major: "teknik menggambar",
    year_of_dedication: "02"
  }
];

const fetchAPI = async endpoint => await axios.get(`${base_url}/${endpoint}`);

export { base_url, mockTeachersResponse, fetchAPI };
