import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab, { TabProps } from "@mui/material/Tab"; // Import TabProps for type safety

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  "& .MuiTabs-flexContainer": {
    width: "fit-content",
    padding: "2px 3px",
    borderRadius: 4,
  },
  "& .MuiTabs-flexContainer button:not(:first-of-type)": {
    marginLeft: "-15px !important",
  },
  "& .Mui-selected": {
    color: "white !important",
    backgroundImage: `url(/active-tab.svg) !important`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontSize: "10px !important",
    minWidth: "150px",
    zIndex: "1 !important",
  },
  "& .MuiButtonBase-root.MuiTab-root": {
    backgroundImage: `url(/non-active.svg)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "10px",
    fontSize: "10px !important",
    fontFamily: "Poppins",
    minWidth: "150px",
    textAlign: "center",
    display: "flex !important",
    alignItems: "flex-start !important",
    transition: "background-image 0.4s, color 0.7s",
  },
});

// Define the type for the props of the AntTab component
type AntTabProps = TabProps & { label: string };

const AntTab = (props: AntTabProps) => <Tab disableRipple {...props} />;

export interface UseTabsProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  list: { label: string; value: number }[];
}

function UseTabs({ tab, setTab, list }: UseTabsProps) {
  return (
    <Grid container pt={1}>
      <Grid md={12} item>
        <AntTabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          aria-label="ant example"
          className="tab-top"
        >
          {list.map((lt) => (
            <AntTab key={lt.value} label={lt.label} value={lt.value} />
          ))}
        </AntTabs>
      </Grid>
    </Grid>
  );
}

export default UseTabs;
