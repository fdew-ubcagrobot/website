import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdChevronRight } from "react-icons/md";
import { past_publications } from "../../constant/portfolio";



const Publications = () => {
  return (
    <div className="mt-20 mx-auto p-6">
      <div class="flex justify-between items-end">
        <h1 className="text-4xl mb-[1%] text-[#3A3A3A] text-left md:ml-24 ml-12">
          Publications
        </h1>
        <div class="max-w-[70%]">
          <div className="max-w-[80%] text-xs">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="row mx-auto mt-6 px-6 md:px-12 flex gap-28 scrollbar-hide overflow-x-auto flex-nowrap">
        {past_publications.map((publication) => (
          <div>
            <PublicationTile
              imageUrl={publication.imageUrl}
              title={publication.title}
              description={publication.description}
              learnMoreUrl={publication.learnMoreUrl}
            ></PublicationTile>
          </div>
        ))}
      </div>
    </div>
  );
};

function PublicationTile(props) {
  const { imageUrl, title, description, learnMoreNavigationUrl } = props;
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="!shadow-lg !bg-[#3a3a3a] !text-white"
    >
      <CardMedia
      className="!p-2"
        sx={{ height: 200, width: 300 }}
        image={imageUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom className="text-lime-500" variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <button
          className="mx-auto mb-2 bg-lime-600 text-white px-4 py-2 rounded-[14px] flex items-center justify-center font-bold"
          onClick={() => (window.location.href = learnMoreNavigationUrl)}
        >
          Learn More <MdChevronRight />
        </button>
      </CardActions>
    </Card>
  );
}

export default Publications;
