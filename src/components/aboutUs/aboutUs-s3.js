import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const past_projects = [
    {
        imageUrl: 'https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2016/10/rickastley.jpg?quality=90&strip=all&ssl=1',
        title: 'Rick Astley',
        description: 'Never gonna give you up',
        learnMoreUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
        imageUrl: 'https://media.licdn.com/dms/image/D5603AQEm49IKoW2uCA/profile-displayphoto-shrink_400_400/0/1696730002451?e=1714003200&v=beta&t=69wJsz-R4F1hJ6WqrVFJjE6NnMp3WqJnwTV6JKzWE5I',
        title: 'Tharun Pranav',
        description: 'CEO of UBC Agrobot',
        learnMoreUrl: 'https://www.linkedin.com/in/tharun-pranav/',
    },
    {
        imageUrl: 'https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png',
        title: 'UBC Agrobot',
        description: 'The best robotics team in the world',
        learnMoreUrl: 'https://www.ubcagrobot.com',
    },
    {
        imageUrl: 'https://media.licdn.com/dms/image/C5603AQFhX0b3GwL8Xw/profile-displayphoto-shrink_400_400/0/1517478902417?e=1714003200&v=beta&t=7L1wYfzT5jGzHvqZ5dW9J9s6a8t1h3yJ4kE8aV8N2nY',
        title: 'Vishal Keshav',
        description: 'CTO of UBC Agrobot',
        learnMoreUrl: 'https://www.linkedin.com/in/vishal-keshav/',
    },
    {
        imageUrl: 'https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png',
        title: 'UBC Agrobot',
        description: 'The best robotics team in the world',
        learnMoreUrl: 'https://www.ubcagrobot.com',
    },
    {
        imageUrl: 'https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png',
        title: 'UBC Agrobot',
        description: 'The best robotics team in the world',
        learnMoreUrl: 'https://www.ubcagrobot.com',
    },
    {
        imageUrl: 'https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png',
        title: 'UBC Agrobot',
        description: 'The best robotics team in the world',
        learnMoreUrl: 'https://www.ubcagrobot.com',
    },
    {
        imageUrl: 'https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png',
        title: 'UBC Agrobot',
        description: 'The best robotics team in the world',
        learnMoreUrl: 'https://www.ubcagrobot.com',
    },
]

const AboutUsS3 = () => {
    return (
        <div className="mt-12 text-center mx-auto p-6">
            <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
                Past projects
            </h1>

            <div className="row mx-auto mt-3 px-6 md:px-12 flex gap-28 scrollbar-hide overflow-x-auto flex-nowrap">
                {past_projects.map((project) => (
                    <div>
                        <MediaCard 
                            imageUrl={project.imageUrl}
                            title={project.title}
                            description={project.description}
                            learnMoreUrl={project.learnMoreUrl}
                        ></MediaCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

function MediaCard(props) {
    const { imageUrl, title, description, learnMoreUrl } = props;
    return (
      <Card sx={{ maxWidth: 345 }} className="!shadow-lg !bg-gradient-to-r from-lime-500 to-lime-200">
        <CardMedia
          sx={{ height: 200, width: 300 }}
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => window.open(learnMoreUrl)} className="!text-green-800 !font-bold" size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

export default AboutUsS3;
