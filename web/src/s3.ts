import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const uploadToS3 = async ({
    Bucket,
    Key,
    Body,
}: {
    Bucket: string;
    Key: string;
    Body: string;
}) => {
    try {
        const cmd = new PutObjectCommand({ Bucket, Key, Body });

        await s3Client.send(cmd);
    } catch (e) {
        throw new Error(e instanceof Error ? e.message : "Error");
    }
};

export { uploadToS3 };
