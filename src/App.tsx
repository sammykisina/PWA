import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Card className='flex items-center flex-col'>
        <CardHeader>
          <CardTitle>Todos</CardTitle>
          <CardDescription>Create and manage your todos</CardDescription>
        </CardHeader>
        <CardContent>Start</CardContent>

        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default App;
