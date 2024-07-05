import { useState } from "react";
import departments from "../data/departments";
import {
  Checkbox,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Typography } from "@material-ui/core";

const Table2 = () => {
  const [expanded, setExpanded] = useState<{ [department: string]: boolean }>(
    {}
  );
  const [selected, setSelected] = useState<{ [department: string]: boolean }>(
    {}
  );

  const handleToggle = (department: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [department]: !prevExpanded[department],
    }));
  };

  const handleSelect = (department: string, subDepartment?: string) => {
    if (subDepartment) {
      setSelected((prevSelected) => ({
        ...prevSelected,
        [subDepartment]: !prevSelected[subDepartment],
      }));
      const allSubDepartmentsSelected = departments.find(
        (d) => d.department === department
      )?.sub_departments;

      setSelected((prevSelected) => {
        const value = allSubDepartmentsSelected?.every(
          (sd) => prevSelected[sd]
        );
        if (value) return { ...prevSelected, [department]: true };
        else return prevSelected;
      });
    } else {
      setSelected((prevSelected) => ({
        ...prevSelected,
        [department]: !prevSelected[department],
      }));
      departments
        .find((d) => d.department === department)
        ?.sub_departments.forEach((sd) => {
          setSelected((prevSelected) => ({
            ...prevSelected,
            [sd]: prevSelected[department],
          }));
        });
    }
  };

  return (
    <>
      <Typography variant="h5" style={{ marginTop: 10 }}>
        Departments
      </Typography>
      <List style={{ maxWidth: 450, margin: "auto" }}>
        {departments.map((department) => (
          <div key={department.department}>
            <ListItem>
              <ListItemIcon>
                <Checkbox
                  checked={
                    selected[department.department]
                      ? selected[department.department]
                      : false
                  }
                  onChange={() => handleSelect(department.department)}
                />
              </ListItemIcon>
              <ListItemText primary={department.department} />
              <IconButton onClick={() => handleToggle(department.department)}>
                {expanded[department.department] ? "-" : "+"}
              </IconButton>
            </ListItem>
            <Collapse
              in={expanded[department.department]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {department.sub_departments.map((subDepartment) => (
                  <ListItem key={subDepartment} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Checkbox
                        checked={
                          selected[subDepartment]
                            ? selected[subDepartment]
                            : false
                        }
                        onChange={() =>
                          handleSelect(department.department, subDepartment)
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary={subDepartment} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </>
  );
};

export default Table2;
