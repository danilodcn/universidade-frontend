import React from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";


interface TabViewProps {
  titles: string[];
  items?: React.Component[];
}


const TabView: React.FC<TabViewProps> = (props) => {
  const [value, setValue] = React.useState("1");

  
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  function render_row_menu(valor: string, index: number) {
    // console.log(valor + " : " + index);
    return <Tab label={valor} value={index.toString()} />;
  }

  return (
    <div className="TabView">
      <Container>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="TabView teste"
                variant="scrollable"
                allowScrollButtonsMobile
                scrollButtons
              >
                {props.titles.map(render_row_menu)}
              </TabList>
            </Box>
            {React.Children.map(props.children, (child, index) => {
              return <TabPanel value={index.toString()}> {child} </TabPanel>;
            })}
          </TabContext>
        </Box>
      </Container>
    </div>
  );
};

export default TabView;
