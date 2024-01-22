import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/Button";
import { Typography } from "@/ui/design-system/typography/typography";

const DesignSystem = () => {
  return (
    <div className="">
      <Seo title="design system" description="Les design system" />
      <div className="p-5 text-center border bg-black">
        <Typography weight="bold" variant="display" theme="primary">
          heading display
        </Typography>
        <Typography variant="h1" theme="secondary">heading 1</Typography>
        <Typography variant="h2" theme="success">heading 2</Typography>
        <Typography variant="h3" theme="danger">heading 3</Typography>
        <Typography variant="h4" theme="warning">heading 4</Typography>
        <Typography variant="h5" theme="white">heading 5</Typography>
        <Typography variant="body-lg" className="text-primary-600">text-lg</Typography>
        <Typography variant="body-base" className="text-primary-300">
          base
          <Typography className="ml-3 text-secondary-400" component="span" variant="body-sm">
            text sm
          </Typography>
        </Typography>
      </div>
        <div className="flex justify-center mt-5 gap-3">
            <Button  size="sm">Click me</Button>
            <Button variant="outline" size="sm">Click me</Button>
            <Button variant="secondary" size="sm">Click me</Button>
            <Button variant="desabled" size="sm">Click me</Button>
        </div>
        <div className="flex justify-center mt-5 gap-3 w-75">
            <Button  >Click me</Button>
            <Button variant="outline">Click me</Button>
            <Button variant="secondary">Click me</Button>
            <Button variant="desabled">Click me</Button>
        </div>
        <div className="flex justify-center mt-5 gap-1">
            <Button  size="lg">Click me</Button>
            <Button variant="outline" size="lg">Click me</Button>
            <Button variant="secondary" size="lg">Click me</Button>
            <Button variant="desabled" size="lg">Click me</Button>
        </div>
    </div>
  );
};
export default DesignSystem;
