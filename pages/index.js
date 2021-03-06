import {
  Typography,
  TextField,
  Grid,
  Button,
  Stack,
  Box,
  IconButton,
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import { useState } from "react";

import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Section = ({ title, children }) => {
  return (
    <Box marginBottom={3}>
      <Typography variant="h5" fontWeight="700" marginBottom={2}>
        {title}
      </Typography>

      {children}
    </Box>
  );
};

const HomePage = () => {
  const [example, setExample] = useState("");

  return (
    <Grid container>
      <Grid item xs={6}>
        <Box
          sx={{
            padding: 3,
          }}
        >
          <Input
            onChange={(e) => {
              setExample(e.target.value);
            }}
            placeholder="Example Text"
            value={example}
          />
          <Typography variant="h1">Title 1: {example}</Typography>
          <Typography variant="h2">Title 2: {example}</Typography>
          <Typography variant="h3">Title 3: {example}</Typography>
          <Typography variant="h4">Title 4: {example}</Typography>
          <Typography variant="h5">Title 5: {example}</Typography>
          <Typography variant="h6">Title 6: {example}</Typography>
          <Typography variant="subtitle1">Subtitle 1: {example}</Typography>
          <Typography variant="subtitle2">SubTitle 2: {example}</Typography>
          <Typography variant="body1">Body 1: {example}</Typography>
          <Typography variant="body2">Body 2: {example}</Typography>
          <Typography variant="button">Button: {example}</Typography>
          <br />
          <Typography variant="caption">Caption: {example}</Typography> <br />
          <Typography variant="overline">Overline: {example}</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            padding: 3,
          }}
        >
          <Section title="Variant">
            <Stack spacing={2} direction="row">
              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
            </Stack>
          </Section>

          <Section title="Type with text">
            <Stack direction="row" spacing={2}>
              <Button>Primary</Button>
              <Button disabled>Disabled</Button>
              <Button href="#text-buttons">Link</Button>
            </Stack>
          </Section>

          <Section title="Type with contained">
            <Stack direction="row" spacing={2} marginBottom={2}>
              <Button variant="contained">Contained</Button>
              <Button variant="contained" disabled>
                Disabled
              </Button>
              <Button variant="contained" href="#contained-buttons">
                Link
              </Button>
            </Stack>
          </Section>

          <Section title="Type with outlined">
            <Stack direction="row" spacing={2} marginBottom={2}>
              <Button variant="outlined">Primary</Button>
              <Button variant="outlined" disabled>
                Disabled
              </Button>
              <Button variant="outlined" href="#outlined-buttons">
                Link
              </Button>
            </Stack>
          </Section>

          <Section title="Type with color">
            <Stack direction="row" spacing={2} marginBottom={2}>
              <Button color="secondary">Secondary</Button>
              <Button variant="contained" color="success">
                Success
              </Button>
              <Button variant="outlined" color="error">
                Error
              </Button>
            </Stack>
          </Section>

          <Section title="Type with size">
            <Stack direction="row" spacing={2} marginBottom={2}>
              <Box sx={{ "& button": { m: 1 } }}>
                <Box>
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="large">Large</Button>
                </Box>
                <Box>
                  <Button variant="outlined" size="small">
                    Small
                  </Button>
                  <Button variant="outlined" size="medium">
                    Medium
                  </Button>
                  <Button variant="outlined" size="large">
                    Large
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" size="small">
                    Small
                  </Button>
                  <Button variant="contained" size="medium">
                    Medium
                  </Button>
                  <Button variant="contained" size="large">
                    Large
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Section>

          <Section title="Button with Icon">
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </Section>
          <Section title="Button Icon">
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </Stack>
          </Section>

          <Section title="Button Icon with Size">
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" size="large">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Section>

          <Section title="Loading Button">
            <Stack direction="row" spacing={2}>
              <LoadingButton loading variant="outlined">
                Submit
              </LoadingButton>
              <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
                Fetch data
              </LoadingButton>
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
              >
                Save
              </LoadingButton>
            </Stack>
          </Section>

          <Section title={"Loading Button with State"}>
            <Box sx={{ "& > button": { m: 1 } }}>
              <LoadingButton variant="outlined" disabled>
                disabled
              </LoadingButton>
              <LoadingButton loadingIndicator="Loading..." variant="outlined">
                Fetch data
              </LoadingButton>
              <LoadingButton
                endIcon={<SendIcon />}
                loadingPosition="end"
                variant="contained"
              >
                Send
              </LoadingButton>
              <LoadingButton
                color="secondary"
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                Save
              </LoadingButton>
            </Box>

            <Box sx={{ "& > button": { m: 1 } }}>
              <LoadingButton variant="outlined" disabled loading={true}>
                disabled
              </LoadingButton>
              <LoadingButton
                loadingIndicator="Loading..."
                variant="outlined"
                loading={true}
              >
                Fetch data
              </LoadingButton>
              <LoadingButton
                endIcon={<SendIcon />}
                loadingPosition="end"
                variant="contained"
                loading={true}
              >
                Send
              </LoadingButton>
              <LoadingButton
                color="secondary"
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                loading={true}
              >
                Save
              </LoadingButton>
            </Box>
          </Section>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Box padding={3}>
          {/* < label="S??? ??i???n tho???i" placeholder="077 8639 310" /> */}

          <FormControl>
            <FormLabel>S??? ??i???n tho???i</FormLabel>
            <Input placeholder="077 8639 310" />
            <FormHelperText error children="C?? l???i x???y ra" />
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
