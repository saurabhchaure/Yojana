// import * as React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TitleIcon from "@mui/icons-material/Title";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListIcon from "@mui/icons-material/List";
import TableViewIcon from "@mui/icons-material/TableView";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { blue, red } from "@mui/material/colors";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import AppBar from "@mui/material/AppBar";
import Icon from "@mui/material/Icon";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  //   height: "780px",
}));

const tabStyle = { fontSize: 12, padding: 0, minHeight: 30 };
const panelStyle = { padding: "5px 0", textAlign: "left" };

export default function HomePage() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            <Grid item xs={8}>
              <Item sx={{ margin: "50px 0", height: "780px" }}>Page</Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{ margin: "50px 0", height: "780px" }}>
                <Item sx={{ margin: "5px 0" }}>
                  <Stack
                    alignItems={"center"}
                    direction="row"
                    spacing={0}
                    useFlexGap
                    flexWrap="wrap"
                  >
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="Header"
                    >
                      <TitleIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small" aria-label="List">
                      <FormatListBulletedIcon fontSize="small" />
                    </IconButton>

                    <IconButton disabled size="small" aria-label="List">
                      <TableViewIcon fontSize="small" />
                    </IconButton>
                    <IconButton disabled size="small" aria-label="List">
                      <ImageIcon fontSize="small" />
                    </IconButton>
                    <IconButton disabled size="small" aria-label="List">
                      <OndemandVideoIcon fontSize="small" />
                    </IconButton>
                    <IconButton disabled size="small" aria-label="List">
                      <MusicNoteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Item>
                <Item sx={{ height: "150px", margin: "5px 0" }}>
                  <TabContext value={value}>
                    <Box
                      sx={{
                        maxWidth: { xs: 320, sm: 480 },
                        bgcolor: "background.paper",
                        borderBottom: 1,
                        borderColor: "divider",
                      }}
                    >
                      <TabList
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        sx={{
                          minHeight: 30,
                        }}
                      >
                        <Tab sx={tabStyle} label="Heading" value="1" />
                        <Tab sx={tabStyle} label="Paragraph" value="2" />
                        <Tab sx={tabStyle} label="Links" value="3" />
                      </TabList>
                    </Box>
                    <TabPanel sx={panelStyle} value="1">
                      <IconButton size="small" color="primary">
                        <Icon baseClassName="material-symbols-outlined">
                          format_h1
                        </Icon>
                      </IconButton>
                      <IconButton size="small">
                        <Icon baseClassName="material-symbols-outlined">
                          format_h2
                        </Icon>
                      </IconButton>
                      <IconButton size="small">
                        <Icon baseClassName="material-symbols-outlined">
                          format_h3
                        </Icon>
                      </IconButton>
                      <IconButton size="small">
                        <Icon baseClassName="material-symbols-outlined">
                          format_h4
                        </Icon>
                      </IconButton>
                      <IconButton size="small">
                        <Icon baseClassName="material-symbols-outlined">
                          format_h5
                        </Icon>
                      </IconButton>
                      <IconButton size="small">
                        <Icon baseClassName="material-symbols-outlined">
                          format_h6
                        </Icon>
                      </IconButton>
                    </TabPanel>
                    <TabPanel sx={panelStyle} value="2">
                      Paragraph
                    </TabPanel>
                    <TabPanel sx={panelStyle} value="3">
                      Links
                    </TabPanel>
                  </TabContext>
                </Item>
                <Item sx={{ margin: "5px 0" }}>
                  <Stack
                    direction="row"
                    spacing={0}
                    alignItems={"center"}
                    useFlexGap
                    flexWrap="wrap"
                  >
                    <IconButton size="small" aria-label="List">
                      <FormatBoldIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small" aria-label="List">
                      <FormatItalicIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="List">
                      <FormatUnderlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="List">
                      <FormatStrikethroughIcon fontSize="small" />
                    </IconButton>
                    <Divider orientation="vertical" spacing={2} flexItem />
                    <IconButton size="small" aria-label="List" color="warning">
                      <FormatQuoteIcon fontSize="small" />
                    </IconButton>
                    <Divider orientation="vertical" spacing={2} flexItem />
                    <IconButton size="small" aria-label="List">
                      <FormatColorFillIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="List">
                      <FormatColorTextIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Item>
                <Item sx={{ height: "200px", margin: "5px 0" }}>
                  Text Editor
                </Item>
                <Item
                  sx={{
                    // height: "100px",
                    margin: "5px 0",
                  }}
                >
                  <Stack
                    useFlexGap
                    direction="row"
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexWrap="wrap"
                  >
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      startIcon={<AddIcon fontSize="small" />}
                    >
                      Add
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      // variant="contained"
                      startIcon={<EditIcon fontSize="small" />}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon fontSize="small" />}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Item>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
