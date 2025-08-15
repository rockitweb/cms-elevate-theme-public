export type HSSelectorOption = {
  label: string;
  value: string;
};

export type Staff = {
  name: string;
  job_title: string;
  photo: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  role: HSSelectorOption;
  bio?: string;
};

export type HSStaffQueryResult = {
  HUBDB: {
    staff_collection: {
      items: Staff[];
    };
  };
};
