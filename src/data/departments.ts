interface Department {
  department: string;
  sub_departments: string[];
}
const departments: Department[] = [
    
      {
        department: "Agriculture & Fishing",
        sub_departments: ["Agriculture", "Crops","Farming Animals & LiveStock","Fishery & Aquaculture","Ranching"],
      },
      {
        department: "Business Services",
        sub_departments: ["Accounting & Accounting Services", "Auctions","Business Services-General","Call Centres & Business Centres","Carrer Planning","Carrer","Commercial Printing","Debt Collection"],
      },
      {
        department: "Customer_service",
        sub_departments: ["Support", "Customer_success"],
      },
      {
        department: "Design",
        sub_departments: ["Graphic_design", "Product_design", "Web_design"],
      },
    ];

export default departments;