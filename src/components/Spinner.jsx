import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner() {
    return(
        <div className="flex min-h-40 w-full items-center justify-center p-3.5">
            <CircularProgress aria-label="Loading..." />
        </div>
    );
}
